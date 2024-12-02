import { contactContainer, loader } from "/js/utils/general/constants.js";
import {
  emailValidation,
  MinLengthValidation,
} from "/js/app/ui/components/contactForm/formValidation.js";

export function contactForm() {
  const contactSection = document.createElement("div");
  contactSection.className = "contactContent";

  loader.style.display = "none";

  const formContainer = document.createElement("div");
  formContainer.className = "form-container";

  const form = document.createElement("form");

  function createInput(
    type,
    id,
    name,
    placeholder,
    disabled = false,
    selected = false,
    required = false,
    autocomplete = "",
    minLength = ""
  ) {
    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.name = name;
    input.placeholder = placeholder;
    if (disabled) input.disabled = true;
    if (selected) input.selected = true;
    if (required) input.required = true;
    if (autocomplete) input.autocomplete = autocomplete;
    if (minLength) input.minLength = minLength;
    return input;
  }

  function createLabel(forAttribute, text) {
    const label = document.createElement("label");
    label.htmlFor = forAttribute;
    label.hidden = true;
    label.textContent = text;
    return label;
  }

  const nameInput = createInput(
    "text",
    "fname",
    "fullname",
    "Your name",
    false,
    false,
    true,
    "name",
    5
  );

  const emailInput = createInput(
    "email",
    "email",
    "email",
    "Your email address",
    false,
    false,
    true,
    "email"
  );

  const subjectLabel = createLabel("subject", "Subject");

  const subjectInput = document.createElement("input");
  subjectInput.type = "text";
  subjectInput.id = "subject";
  subjectInput.name = "subject";
  subjectInput.placeholder = "Subject";
  subjectInput.minLength = 15;
  subjectInput.required = true;

  const messageTextarea = document.createElement("textarea");
  messageTextarea.id = "message";
  messageTextarea.name = "message";
  messageTextarea.style.height = "200px";
  messageTextarea.placeholder = "Your message here..";
  messageTextarea.minLength = 25;
  messageTextarea.required = true;

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.id = "submitBtn";
  submitButton.value = "Send";

  // Append everything in order
  form.appendChild(nameInput);
  form.appendChild(emailInput);
  form.appendChild(subjectLabel);
  form.appendChild(subjectInput);
  form.appendChild(createLabel("message", "Message"));
  form.appendChild(messageTextarea);
  form.appendChild(submitButton);

  formContainer.appendChild(form);
  contactSection.appendChild(formContainer);
  contactContainer.appendChild(contactSection);

  // Validate input values
  emailValidation(emailInput);
  MinLengthValidation(nameInput, 5, "Name must be at least 5 characters.");
  MinLengthValidation(
    subjectInput,
    15,
    "Subject must be at least 15 characters."
  );
  MinLengthValidation(
    messageTextarea,
    25,
    "Message must be at least 25 characters."
  );
}
