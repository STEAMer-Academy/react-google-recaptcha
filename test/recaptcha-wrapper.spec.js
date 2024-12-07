import React from "react";
import { render } from "@testing-library/react";
import ReCAPTCHA from "../src/recaptcha-wrapper";

const VALUE = "some value";
const WIDGET_ID = "someWidgetId";

// Create a mock for grecaptcha
const grecaptchaMock = {
  render: jest.fn(() => WIDGET_ID),
  getResponse: jest.fn(() => VALUE),
};

describe("ReCAPTCHAWrapper", () => {
  beforeEach(() => {
    window.grecaptcha = grecaptchaMock;
  });
  afterEach(() => {
    delete window.grecaptcha;
  });
  it("should be wrapped properly", () => {
    expect(ReCAPTCHA.displayName).toBe("AsyncScriptLoader(ReCAPTCHA)");
  });
  it("should proxy functions", () => {
    const ReCaptchaRef = React.createRef();

    render(<ReCAPTCHA sitekey="xxx" ref={ReCaptchaRef} onChange={jest.fn()} />);

    // Assert that render was called with the correct arguments
    const renderOptions = grecaptchaMock.render.mock.calls[0][1];
    expect(grecaptchaMock.render.mock.calls[0][0]).toBeTruthy();
    expect(renderOptions).toBeTruthy();
    expect(renderOptions.sitekey).toBe("xxx");

    // Assert that getResponse was called with the correct widgetId
    expect(ReCaptchaRef.current.getValue()).toBe(VALUE);
    expect(grecaptchaMock.getResponse.mock.calls[0][0]).toBe(WIDGET_ID);
  });
});
