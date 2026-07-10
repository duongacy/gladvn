import { P as e, Wn as t, jt as n } from "./showcase-vJrKG7HA.js";
var r = typeof CSS < `u` && !!CSS.supports?.(`-webkit-backdrop-filter:none`),
  i = !r && n.includes(`firefox`);
!r && n.includes(`chrom`);
var a = 0,
  o = class e {
    static create() {
      return new e();
    }
    currentId = a;
    start(e, t) {
      (this.clear(),
        (this.currentId = setTimeout(() => {
          ((this.currentId = a), t());
        }, e)));
    }
    isStarted() {
      return this.currentId !== a;
    }
    clear = () => {
      this.currentId !== a &&
        (clearTimeout(this.currentId), (this.currentId = a));
    };
    disposeEffect = () => this.clear;
  };
function s() {
  let n = t(o.create).current;
  return (e(n.disposeEffect), n);
}
export { r as i, s as n, i as r, o as t };
