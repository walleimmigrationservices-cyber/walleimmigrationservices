 // ===== FORM SUBMISSION =====
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);

      // Determine the correct Apps Script URL for each form
      let scriptURL = form.dataset.script; // Add data-script="URL" to each form

      fetch(scriptURL, { method:"POST", body: formData })
        .then(resp => resp.text())
        .then(data => {
          alert("Submission successful!");
          form.reset();
        })
        .catch(err => alert("Error submitting form. Please try again."));
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {

  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Determine which Google Script to use
      let scriptURL = "";
      if (form.classList.contains("contact-form")) {
        scriptURL = "https://script.google.com/macros/s/AKfycbykSqE6M3LJ8xm8Zr1pKasbR1TTXwVjRo2mdXr4ZYUzhpaOq5pZo-JMfuOrnaAz1dEK/exec";
      } else if (form.classList.contains("client-intake-form")) {
        scriptURL = "https://script.google.com/macros/s/AKfycbydlEo8R-EUgx0K7swZdtFFDAS2kuqv88O3UtrBslfpVbLy9sEPCYWIlfQKtHx6JwlW/exec";
      } else if (form.classList.contains("upload-form")) {
        scriptURL = "https://script.google.com/macros/s/AKfycbxLp8n3gG7b0P4QagOr2xJ3SQUcgOrhov5m1ZuTi02RFtcBSHN4CRJ13bQfZyb824fa/exec";
      }

      const formData = new FormData(form);

      // For file uploads, use FormData directly
      fetch(scriptURL, {
        method: "POST",
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        alert("Thank you! Your submission has been received.");
        form.reset();
      })
      .catch(error => {
        console.error(error);
        alert("Error submitting form. Please try again.");
      });
    });
  });

});
document.addEventListener("DOMContentLoaded", () => {

  const forms = document.querySelectorAll("form[data-script]");

  forms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const scriptURL = form.dataset.script; // gets your data-script URL
      const formData = new FormData(form);

      fetch(scriptURL, {
        method: "POST",
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        alert("Thank you! Your message was sent successfully.");
        form.reset();
      })
      .catch(error => {
        console.error("Form submit error:", error);
        alert("Error submitting form. Please try again.");
      });

    });
  });

});




document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form[data-script]");

  forms.forEach(form => {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const scriptURL = form.dataset.script;
      const formData = new FormData(form);

      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          body: formData
        });
        const text = await response.text();
        console.log("Response from script:", text);
        alert("✅ Documents uploaded successfully!");
        form.reset();
      } catch (error) {
        console.error("Upload error:", error);
        alert("⚠️ Error uploading documents. Please try again.");
      }
    });
  });
});