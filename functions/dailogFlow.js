// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// const cors = require("cors")({ origin: true });
// const {SessionsClient} = require("@google-cloud/dialogflow");

// admin.initializeApp();

// // TODO: set your Dialogflow agent GCP project id
// const projectId = "YOUR_DIALOGFLOW_PROJECT_ID";
// const sessionClient = new SessionsClient();

// exports.dialogflowGateway = functions.https.onRequest(async (req, res) => {
//   cors(req, res, async () => {
//     if (req.method !== "POST") {
//       return res.status(405).send({ error: "Method not allowed" });
//     }

//     try {
//       const { query, sessionId = "anonymous", languageCode = "en-US", userId } = req.body || {};

//       if (!query || typeof query !== "string") {
//         return res.status(400).send({ error: "Missing 'query' in body" });
//       }

//       const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

//       const dfReq = {
//         session: sessionPath,
//         queryInput: {
//           text: { text: query, languageCode }
//         }
//       };

//       const [dfRes] = await sessionClient.detectIntent(dfReq);
//       const result = dfRes.queryResult || {};
//       const reply = result.fulfillmentText || "(no response)";

//       // Optional: log chat to Firestore
//       if (userId) {
//         await admin.firestore().collection("chats").add({
//           userId,
//           sessionId,
//           query,
//           reply,
//           timestamp: admin.firestore.FieldValue.serverTimestamp()
//         });
//       }

//       return res.status(200).send({
//         reply,
//         intent: result.intent?.displayName || null,
//         confidence: result.intentDetectionConfidence ?? null,
//       });
//     } catch (e) {
//       console.error(e);
//       return res.status(500).send({ error: e.message || "Internal error" });
//     }
//   });
// });
