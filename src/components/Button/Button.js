import {
  Button as ButtonDefault,
  ButtonClose,
  ButtonDanger,
  ButtonInvisible,
  ButtonOutline,
  ButtonPrimary,
} from "@primer/components";

function Button({ children, block, variant, ...props }) {
  let ButtonVariant;

  switch (variant) {
    case "primary":
      ButtonVariant = ButtonPrimary;
      break;
    case "danger":
      ButtonVariant = ButtonDanger;
      break;
    case "outline":
      ButtonVariant = ButtonOutline;
      break;
    case "invisible":
      ButtonVariant = ButtonInvisible;
      break;
    case "close":
      ButtonVariant = ButtonClose;
      break;
    default:
      ButtonVariant = ButtonDefault;
      break;
  }

  return (
    <ButtonVariant {...(block ? { width: "100%" } : {})} {...props}>
      {children}
    </ButtonVariant>
  );
}

export { Button as default };
