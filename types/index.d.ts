declare module '@steamer-academy/react-google-recaptcha' {
  import * as React from 'react';

  export interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    grecaptcha?: any;
    theme?: "dark" | "light";
    type?: "image" | "audio";
    tabindex?: number;
    onExpired?: () => void;
    onErrored?: () => void;
    size?: "compact" | "normal" | "invisible";
    stoken?: string;
    hl?: string;
    badge?: "bottomright" | "bottomleft" | "inline";
    isolated?: boolean;
  }

  export class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {
    reset(): void;
    execute(): Promise<string>;
    getValue(): string | null;
    getWidgetId(): number | null;
  }

  const ReCAPTCHAWrapper: typeof ReCAPTCHA;
  export default ReCAPTCHAWrapper;
}
