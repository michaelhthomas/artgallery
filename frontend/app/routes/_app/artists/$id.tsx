import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/artists/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_app/artists/$id"!</div>
}
