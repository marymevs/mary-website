// <site-footer> — the shared "Get in touch" footer used on every page.
//
// Lives in the light DOM (no shadow root) so existing styles in styles.css
// (which target the bare <footer>, <form>, <input>, etc. selectors) continue
// to apply without change.
//
// To use: include <script type="module" src="./site-footer.js"></script> in
// <head>, then drop <site-footer></site-footer> wherever the footer should
// render.
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer id="get-in-touch">
        <h1>Get in touch</h1>
        <form action="#">
          <div>
            <label for="footer-name">Name</label>
            <input type="text" id="footer-name" name="name" />
          </div>
          <div>
            <label for="footer-email">Email</label>
            <input type="email" id="footer-email" name="email" />
          </div>
          <div>
            <label for="footer-message">How can I help?</label>
            <input type="text" id="footer-message" name="message" />
          </div>
        </form>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
