import { toast } from "svelte-sonner";

export const formEnhanceFunction = ({
    formElement,
    formData,
    action,
    cancel,
    submitter,
}: {
    action: URL;
    formData: FormData;
    formElement: HTMLFormElement;
    controller: AbortController;
    submitter: HTMLElement | null;
    cancel: () => void;
}) => {
    // `formElement` is this `<form>` element
    // `formData` is its `FormData` object that's about to be submitted
    // `action` is the URL to which the form is posted
    // calling `cancel()` will prevent the submission
    // `submitter` is the `HTMLElement` that caused the form to be submitted
    console.log(formElement);
    return async ({ result, update }) => {
        toast(result.data.message);
        update();
    };
};