# Changelog

## 0.3.0

- redirect from "upload file" page to home page when the upload process goes right; print error if the upload process fails.
- Print error/success messages.
- Add buttons for the following endpoints:
 + Reset: Only 1 (general) button. Calls "POST to /system/reset" instead of "DELETE to /deleteAll".
 + Start/stop experiments: Only 1 (general) button. Calls "PUT to /system" passing 'running' variable with true/false.
 + System settings: Retrieves system information and make it possible to change it.
 + Delete project: One button for each project, similar to "Actions > Info ('i')" one.

- Delete ```oc``` folder with manual deployment instructions. It is easier to deploy using Openshift catalog.
