# Uncontrolled Forms

[Course Notes](https://react-v9.holt.courses/lessons/advanced-react/uncontrolled-forms)

An _uncontrolled form_ is where the browser handles the data management and we only listen for the submit events, as opposed to using hooks like`useState` to manage the state from the form.

## Notes

This is pretty straightforward.

- We use the [useMutation](https://tanstack.com/query/latest/docs/framework/react/reference/functions/useMutation) hook from TanStack Query. This sends the data to our API.
- We are using `isSuccess` to show or hide the form.
- We are letting the DOM manage the state, there is no `useState` hooks here at all.
- There are also other useful properties on the mutation object like `isError` or `isIdle` which we are not using here.
- Mutations are shown in the mutation tab in the TanStack Query dev tools.
