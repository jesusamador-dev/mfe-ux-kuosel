import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import KSLButtonWithIcon from "./KSLButtonWithIcon";

export default {
  title: "Moleculas/KSLButtonWithIcon",
  component: KSLButtonWithIcon,
  argTypes: {
    text: { control: "text" },
    iconName: {
      control: "select",
      options: ["google", "apple", "facebook", "mastercard", "visa", "email"], // Opciones basadas en tus íconos disponibles
    },
    iconPosition: {
      control: "radio",
      options: ["left", "right"],
    },
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof KSLButtonWithIcon>;

const Template: StoryFn<typeof KSLButtonWithIcon> = (args) => (
  <KSLButtonWithIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: "Sign in with Google",
  iconName: "google",
  iconPosition: "left",
  buttonType: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Sign up with Apple",
  iconName: "apple",
  iconPosition: "left",
  buttonType: "secondary",
};

Secondary.parameters = {
  backgrounds: {
    default: "principal",
    values: [{ name: "principal", value: "#F45D2D" }],
  },
};

export const Transparent = Template.bind({});
Transparent.args = {
  text: "Sign in with Facebook",
  iconName: "facebook",
  iconPosition: "left",
  buttonType: "transparent",
};

Transparent.parameters = {
  backgrounds: {
    default: "principal",
    values: [{ name: "principal", value: "#F45D2D" }],
  },
};

export const Bordered = Template.bind({});
Bordered.args = {
  text: 'Sign in with Facebook',
  iconName: 'facebook',
  iconPosition: 'left',
  buttonType: 'bordered',
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  iconName: 'facebook',
  iconPosition: 'left',
  buttonType: 'transparent',
};

OnlyIcon.parameters = {
    backgrounds: {
      default: "principal",
      values: [{ name: "principal", value: "#F45D2D" }],
    },
  };

export const DisabledPrimaryWithIcon = Template.bind({});
DisabledPrimaryWithIcon.args = {
  text: "Disabled Button",
  iconName: "email",
  iconPosition: "left",
  buttonType: "primary",
  disabled: true,
};
