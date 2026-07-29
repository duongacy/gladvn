const ts = require("typescript");
const fs = require("fs");
const path = require("path");

function fixFile(file, newTitleStr, newDescStr) {
  const filePath = path.join("src/dev/showcase", file);
  if (!fs.existsSync(filePath)) return;
  
  let code = fs.readFileSync(filePath, "utf8");
  const sourceFile = ts.createSourceFile(file, code, ts.ScriptTarget.Latest, true);
  
  const compName = path.basename(file, ".tsx").split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("");

  const replacements = [];

  function processFn(node, fnName) {
    let found = false;
    function visitInside(n) {
      if (found) return;
      if (ts.isJsxOpeningElement(n) || ts.isJsxSelfClosingElement(n)) {
        if (n.tagName.getText() === "ShowcaseExample") {
          const attrs = n.attributes.properties;
          const titleProp = attrs.find(a => a.name && a.name.getText() === "title");
          const descProp = attrs.find(a => a.name && a.name.getText() === "description");
          
          if (titleProp) {
            replacements.push({ start: titleProp.initializer.getStart(), end: titleProp.initializer.getEnd(), text: newTitleStr });
          }
          if (descProp) {
            replacements.push({ start: descProp.initializer.getStart(), end: descProp.initializer.getEnd(), text: newDescStr });
          }
          found = true;
          return;
        }
      }
      ts.forEachChild(n, visitInside);
    }

    let inTarget = false;
    function visit(n) {
      if (ts.isFunctionDeclaration(n) && n.name && n.name.getText() === fnName) {
        inTarget = true;
        ts.forEachChild(n, visitInside);
        inTarget = false;
      } else {
        ts.forEachChild(n, visit);
      }
    }
    visit(sourceFile);
  }

  processFn(sourceFile, compName + "MacroShowcase");
  processFn(sourceFile, compName + "MicroShowcase");

  if (replacements.length > 0) {
    replacements.sort((a, b) => b.start - a.start);
    for (const r of replacements) {
      code = code.substring(0, r.start) + r.text + code.substring(r.end);
    }
    fs.writeFileSync(filePath, code);
    console.log("Updated", file);
  }
}

fixFile("input.tsx", `"Trường Nhập Tiêu Chuẩn (Standard)"`, `"Trường nhập văn bản hoàn chỉnh có nhãn và mô tả."`);
fixFile("textarea.tsx", `"Trường Văn Bản Tiêu Chuẩn (Standard)"`, `"Trường văn bản nhiều dòng với nhãn và mô tả."`);
fixFile("radio-group.tsx", `"Nhóm Lựa Chọn Tiêu Chuẩn (Standard)"`, `"Nhóm lựa chọn cơ bản với các tùy chọn."`);
fixFile("slider.tsx", `"Thanh Trượt Tiêu Chuẩn (Standard)"`, `"Thanh trượt cơ bản có nhãn và mô tả."`);
fixFile("checkbox.tsx", `{t("Tiêu chuẩn (Standard)", "Standard")}`, `{t("Checkbox cơ bản kèm nhãn và mô tả.", "Basic checkbox with label and description.")}`);
fixFile("switch.tsx", `"Công Tắc Tiêu Chuẩn (Standard)"`, `"Công tắc cơ bản có nhãn và mô tả."`);
fixFile("avatar.tsx", `"Tiêu chuẩn (Standard)"`, `"Avatar tự động fallback dựa vào tên truyền vào alt."`);
fixFile("card.tsx", `{t("Tiêu chuẩn (Standard)", "Standard")}`, `{t("Card cơ bản bao gồm tiêu đề, nội dung và chân trang.", "Basic card with title, content, and footer.")}`);
fixFile("dialog.tsx", `"Sử Dụng Cơ Bản (Basic Usage)"`, `"Cửa sổ hộp thoại cơ bản với tiêu đề và mô tả."`);
fixFile("alert-dialog.tsx", `"Xác Nhận Cơ Bản (Basic Usage)"`, `"Hộp thoại yêu cầu xác nhận hành động."`);

