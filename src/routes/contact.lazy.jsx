import { createLazyFileRoute } from "@tanstack/react-router"
import { useMutation } from "@tanstack/react-query"
import postContact from "../api/postContact"

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
})

function ContactRoute() {
  // This is a useMutation result
  const mutation = useMutation({
    mutationFn: function(e) {
      // prevents the default form submission behaviour in lieu of our onSubmit event.
      e.preventDefault()
      // e.target is the actual form in this case
      const formData = new FormData(e.target)
      return postContact(formData.get("name"), formData.get("email"), formData.get("message"))
    },
  })

  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form onSubmit={mutation.mutate}>
          <input name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button>Submit</button>
        </form>
      )}
    </div>
  )
}
