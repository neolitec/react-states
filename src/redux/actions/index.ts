import { Action as ReduxAction } from 'redux'

interface ActionData {
  data: any
}

export type Action = Partial<ReduxAction<String> & ActionData>
