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

  export interface ReCAPTCHAHandle {
    reset(): void;
    execute(): Promise<string>;
    getValue(): string | null;
    getWidgetId(): number | null;
  }

  export class ReCAPTCHA extends React.Component<ReCAPTCHAProps> implements ReCAPTCHAHandle {
    reset(): void;
    execute(): Promise<string>;
    getValue(): string | null;
    getWidgetId(): number | null;
  }

  const ReCAPTCHAWrapper: React.ForwardRefExoticComponent<
    ReCAPTCHAProps & React.RefAttributes<ReCAPTCHAHandle>
  >;
  export default ReCAPTCHAWrapper;
}
