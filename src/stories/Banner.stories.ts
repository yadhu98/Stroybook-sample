import {Banner} from './Banner'


const meta = {
  title: "Example/Banner",
  component: Banner
}

export default meta

// type Story = StoryObj<typeof meta>

export const Info = {
    args : {
        info : 'primary',
        children : "Hello"
    }
}

export const Danger = {
    args : {
        info : 'danger',
        children : "Hello this is danger"
    }
}