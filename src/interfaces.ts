
export interface renderToastMessage {
  text: string[],
  type: string
}
export interface renderToastAction {
  name: string,
  handler: () => void
}
