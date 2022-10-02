import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { HeaderCurriculum } from './HeaderCurriculum'

export default {
  title: 'features/components/header/HeaderCurriculum',
  component: HeaderCurriculum,
  parameters: {  },
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        {Story()}
      </div>
    ),
  ],
} as ComponentMeta<typeof HeaderCurriculum>

const Template: ComponentStory<typeof HeaderCurriculum> = (args) => <HeaderCurriculum {...args}/>

export const Primary = Template.bind({})
Primary.args = {
  name: 'teste2'
}
