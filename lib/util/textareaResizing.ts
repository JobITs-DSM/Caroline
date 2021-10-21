export const textareaResizing = (id: string) => {
  const textarea = document.getElementById(id);
  textarea
    ? (textarea.style.height = textarea.scrollHeight.toString() + "px")
    : {};
};
