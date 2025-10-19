const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Example 1: Create a user
// exports.createUser = functions.https.onCall(async (data, context) => {
//   const user = await admin.auth().createUser({
//     email: data.email,
//     password: data.password,
//   });
//   return { uid: user.uid };
// });

// Example 2: Send an email
// Trigger when a new document is added to Firestore collection "CustomerMessages"
exports.sendContactMessageEmail = onDocumentCreated("CustomerMessages/{messageId}", async (event) => {
  const customerData = event.data.data();

  // Create the email transporter using your Gmail credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_APP_USER,
      pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD,
    },
  });

  // Build the email content
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_GMAIL_APP_USER,
    to: "sales@cs3.ltd", // main recipient
    cc: "candscubed@gmail.com", // optional CC
    subject: "📩 New Message from Contact Page",
    html: `
      <h2>New Customer Inquiry</h2>
      <p><strong>Name:</strong> ${customerData.name}</p>
      <p><strong>Email:</strong> ${customerData.email}</p>
      <p><strong>Phone:</strong> ${customerData.phone}</p>
      <p><strong>Service Interested In:</strong> ${customerData.service}</p>
      <p><strong>Property Type:</strong> ${customerData.propertyType}</p>
      <p><strong>Message:</strong><br/>${customerData.message}</p>
      <hr/>
      <p><em>This message was submitted via the Contact Us form on the CS3 Smart Security website.</em></p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Contact form email sent successfully!");
  } catch (error) {
    console.error("❌ Error sending contact form email:", error);
  }
});


// Example 3: Get products
// exports.getProducts = functions.https.onRequest(async (req, res) => {
//   const snapshot = await admin.firestore().collection("products").get();
//   const products = snapshot.docs.map(doc => doc.data());
//   res.json(products);
// });
