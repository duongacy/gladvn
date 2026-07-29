const fs = require("fs");
const path = require("path");

function updateFirstExample(filePath, newTitle, newDesc) {
  if (!fs.existsSync(filePath)) return;
  let code = fs.readFileSync(filePath, "utf8");

  // A simple regex approach to find the first ShowcaseExample in Macro and Micro blocks
  function replaceInBlock(code, blockName, title, desc) {
    const blockRegex = new RegExp(`function ${blockName}\\s*\\([^{]*\\)\\s*\\{[\\s\\S]*?<ShowcaseExample\\s+title=([^\\s]+(?:\\s+[^\\s]+)*?)\\s+description=([^\\s]+(?:\\s+[^\\s]+)*?)\\s+code=`);
    const match = code.match(blockRegex);
    if (match) {
      const oldTitle = match[1];
      const oldDesc = match[2];
      
      const newTitleStr = newTitle.startsWith('{') ? newTitle : `"${newTitle}"`;
      const newDescStr = newDesc.startsWith('{') ? newDesc : `"${newDesc}"`;
      
      const replacement = `<ShowcaseExample title=${newTitleStr} description=${newDescStr} code=`;
      code = code.replace(match[0], match[0].replace(/<ShowcaseExample\s+title=[^\s]+(?:\s+[^\s]+)*?\s+description=[^\s]+(?:\s+[^\s]+)*?\s+code=/, replacement));
    }
    return code;
  }

  const compName = path.basename(filePath, ".tsx").split("-").map(p => p.charAt(0).toUpperCase() + p.slice(1)).join("");
  
  let newCode = replaceInBlock(code, compName + "MacroShowcase", newTitle, newDesc);
  newCode = replaceInBlock(newCode, compName + "MicroShowcase", newTitle, newDesc);
  
  if (newCode !== code) {
    fs.writeFileSync(filePath, newCode);
    console.log("Updated", filePath);
  }
}

updateFirstExample("src/dev/showcase/input.tsx", "Trường Nhập Tiêu Chuẩn (Standard)", "Trường nhập văn bản hoàn chỉnh có nhãn và mô tả.");
updateFirstExample("src/dev/showcase/textarea.tsx", "Trường Văn Bản Tiêu Chuẩn (Standard)", "Trường văn bản nhiều dòng với nhãn và mô tả.");
updateFirstExample("src/dev/showcase/radio-group.tsx", "Nhóm Lựa Chọn Tiêu Chuẩn (Standard)", "Nhóm lựa chọn cơ bản với các tùy chọn.");
updateFirstExample("src/dev/showcase/slider.tsx", "Thanh Trượt Tiêu Chuẩn (Standard)", "Thanh trượt cơ bản có nhãn và mô tả.");
updateFirstExample("src/dev/showcase/checkbox.tsx", "{t(\"Tiêu chuẩn (Standard)\", \"Standard\")}", "{t(\"Checkbox cơ bản kèm nhãn và mô tả.\", \"Basic checkbox with label and description.\")}");
updateFirstExample("src/dev/showcase/switch.tsx", "Công Tắc Tiêu Chuẩn (Standard)", "Công tắc cơ bản có nhãn và mô tả.");
updateFirstExample("src/dev/showcase/avatar.tsx", "Tiêu chuẩn (Standard)", "Avatar tự động fallback dựa vào tên truyền vào alt.");
updateFirstExample("src/dev/showcase/empty.tsx", "Tiêu chuẩn (Standard)", "Hiển thị trạng thái trống với đầy đủ icon, tiêu đề và mô tả.");
updateFirstExample("src/dev/showcase/card.tsx", "{t(\"Tiêu chuẩn (Standard)\", \"Standard\")}", "{t(\"Card cơ bản bao gồm tiêu đề, nội dung và chân trang.\", \"Basic card with title, content, and footer.\")}");
updateFirstExample("src/dev/showcase/dialog.tsx", "Sử Dụng Cơ Bản (Basic Usage)", "Cửa sổ hộp thoại cơ bản với tiêu đề và mô tả.");
updateFirstExample("src/dev/showcase/alert-dialog.tsx", "Xác Nhận Cơ Bản (Basic Usage)", "Hộp thoại yêu cầu xác nhận hành động.");
updateFirstExample("src/dev/showcase/carousel.tsx", "{t(\"Tiêu chuẩn (Standard)\", \"Standard\")}", "{t(\"Băng chuyền cơ bản nhất với các nút điều hướng.\", \"The most basic carousel with navigation buttons.\")}");

