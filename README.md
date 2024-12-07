[reCAPTCHA]: https://developers.google.com/recaptcha/docs/display
[signup]: http://www.google.com/recaptcha/admin
[docs]: https://developers.google.com/recaptcha
[docs_theme]: https://developers.google.com/recaptcha/docs/faq#can-i-customize-the-recaptcha-widget
[js_api]: https://developers.google.com/recaptcha/docs/display#js_api
[rb]: https://github.com/react-bootstrap/react-bootstrap/
[reCAPTCHA secure-token]: https://developers.google.com/recaptcha/docs/secure_token
[reCAPTCHA hl]: https://developers.google.com/recaptcha/docs/language

<h3 align="center"><img src="https://readme-typing-svg.demolab.com/?lines=React+Google+Recaptcha+🤖;&font=Poppins"></h3>

<h4 align="center">
  <a href="https://github.com/STEAMer-Academy/react-google-recaptcha/actions/workflows/standard-ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/STEAMer-Academy/react-google-recaptcha/standard-ci.yml?logo=github&style=for-the-badge" alt="Build Status"></a>
  <a href="https://badge.fury.io/js/@steamer-academy%2Freact-google-recaptcha">
    <img src="https://img.shields.io/npm/v/@steamer-academy/react-google-recaptcha.svg?logo=npm&color=4eb551&style=for-the-badge" alt="npm version">
  </a>
  <a href="https://img.shields.io/npm/dm/@steamer-academy/react-google-recaptcha">
    <img src="https://img.shields.io/npm/dm/@steamer-academy/react-google-recaptcha.svg?logo=download&color=36B37E&style=for-the-badge" alt="npm downloads">
  </a>
</h4>

---

React component for [Google reCAPTCHA v2][reCAPTCHA].

## 🚀 Installation

```bash
npm install --save react-google-recaptcha
```

## 📖 Usage

Start by [signing up for an API key pair][signup]. Use the client key with the `<ReCAPTCHA />` component as shown:

### Basic Example

```jsx
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}

ReactDOM.render(
  <ReCAPTCHA
    sitekey="Your client site key"
    onChange={onChange}
  />,
  document.body
);
```

### Component Props

| Name             | Type   | Description                                                                 |
|------------------|--------|-----------------------------------------------------------------------------|
| `asyncScriptOnLoad` | func  | *Optional.* Callback when the script has loaded.                           |
| `badge`          | enum   | *Optional.* Badge position: `bottomright`, `bottomleft`, or `inline`.        |
| `hl`             | string | *Optional.* Language code (e.g., `en`, `fr`). [Details][reCAPTCHA hl].       |
| `isolated`       | bool   | *Optional.* Enable isolated mode. Default: `false`.                         |
| `onChange`       | func   | Triggered when the user completes the captcha.                              |
| `onErrored`      | func   | *Optional.* Callback for error events.                                      |
| `onExpired`      | func   | *Optional.* Triggered when the challenge expires.                           |
| `sitekey`        | string | *Required.* API client key.                                                 |
| `size`           | enum   | *Optional.* Size of the captcha: `compact`, `normal`, or `invisible`.       |
| `stoken`         | string | *Optional.* Secure token for enhanced security.                            |
| `tabindex`       | number | *Optional.* Tabindex of the element. Default: `0`.                         |
| `type`           | enum   | *Optional.* Challenge type: `image` or `audio`. Default: `image`.           |
| `theme`          | enum   | *Optional.* Widget theme: `light` or `dark`. Default: `light`. [Example][docs_theme].

### Advanced Features

#### Invisible reCAPTCHA

To use an invisible reCAPTCHA, invoke the challenge programmatically using `execute` or `executeAsync`.

```jsx
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();

function handleSubmit() {
  recaptchaRef.current.execute();
}

ReactDOM.render(
  <form onSubmit={handleSubmit}>
    <ReCAPTCHA
      ref={recaptchaRef}
      size="invisible"
      sitekey="Your client site key"
    />
  </form>,
  document.body
);
```

#### Asynchronous Execution

```jsx
const recaptchaRef = React.useRef();

const handleSubmit = async () => {
  const token = await recaptchaRef.current.executeAsync();
  console.log("Received token:", token);
};

return (
  <form onSubmit={handleSubmit}>
    <ReCAPTCHA
      ref={recaptchaRef}
      size="invisible"
      sitekey="Your client site key"
    />
  </form>
);
```

#### CSP Nonce Support

Add a nonce for strict Content Security Policy (CSP) compliance.

```js
window.recaptchaOptions = {
  nonce: document.querySelector("meta[name='csp-nonce']").getAttribute("content"),
};
```

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
