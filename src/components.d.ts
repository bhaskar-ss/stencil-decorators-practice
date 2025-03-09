/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyButton {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyFocusableInput {
    }
    interface MySubmitButton {
    }
    interface UserCard {
        "email": string;
        "getCount": () => Promise<number>;
        "name": string;
    }
}
export interface MySubmitButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMySubmitButtonElement;
}
declare global {
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyFocusableInputElement extends Components.MyFocusableInput, HTMLStencilElement {
    }
    var HTMLMyFocusableInputElement: {
        prototype: HTMLMyFocusableInputElement;
        new (): HTMLMyFocusableInputElement;
    };
    interface HTMLMySubmitButtonElementEventMap {
        "submitButton": any;
    }
    interface HTMLMySubmitButtonElement extends Components.MySubmitButton, HTMLStencilElement {
        addEventListener<K extends keyof HTMLMySubmitButtonElementEventMap>(type: K, listener: (this: HTMLMySubmitButtonElement, ev: MySubmitButtonCustomEvent<HTMLMySubmitButtonElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLMySubmitButtonElementEventMap>(type: K, listener: (this: HTMLMySubmitButtonElement, ev: MySubmitButtonCustomEvent<HTMLMySubmitButtonElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLMySubmitButtonElement: {
        prototype: HTMLMySubmitButtonElement;
        new (): HTMLMySubmitButtonElement;
    };
    interface HTMLUserCardElement extends Components.UserCard, HTMLStencilElement {
    }
    var HTMLUserCardElement: {
        prototype: HTMLUserCardElement;
        new (): HTMLUserCardElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
        "my-component": HTMLMyComponentElement;
        "my-focusable-input": HTMLMyFocusableInputElement;
        "my-submit-button": HTMLMySubmitButtonElement;
        "user-card": HTMLUserCardElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyFocusableInput {
    }
    interface MySubmitButton {
        "onSubmitButton"?: (event: MySubmitButtonCustomEvent<any>) => void;
    }
    interface UserCard {
        "email"?: string;
        "name"?: string;
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-component": MyComponent;
        "my-focusable-input": MyFocusableInput;
        "my-submit-button": MySubmitButton;
        "user-card": UserCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-focusable-input": LocalJSX.MyFocusableInput & JSXBase.HTMLAttributes<HTMLMyFocusableInputElement>;
            "my-submit-button": LocalJSX.MySubmitButton & JSXBase.HTMLAttributes<HTMLMySubmitButtonElement>;
            "user-card": LocalJSX.UserCard & JSXBase.HTMLAttributes<HTMLUserCardElement>;
        }
    }
}
