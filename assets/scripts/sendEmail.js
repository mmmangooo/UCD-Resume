function sendMail(contactForm) {
    emailjs.send('default_service', 'template_cqn33um', {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'project_request': contactForm.projectsummary.value
    })

    .then(
        function(response) {
            console.log('success', response);
        },
        function(error) {
            HTMLFormControlsCollection.log('failed', error);
        });

        return false;
}