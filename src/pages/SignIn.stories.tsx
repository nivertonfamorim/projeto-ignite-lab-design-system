import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { SignIn } from './SignIn';

export default {
  title: 'Pages/Sign In',
  component: SignIn,
  args: {},
  argTypes: {}
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu email'), 'niverton@hotmail.com')
    userEvent.type(canvas.getByPlaceholderText('******'), '123456')

    userEvent.click(canvas.getByRole('Button'))

    await waitFor(() => {
      return expect(canvas.getByText('Login realizado')).toBeInTheDocument()
    }
    )    
  }
};

