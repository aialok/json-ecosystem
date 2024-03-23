import mongoose from "mongoose";

const organisationSchema = new mongoose.Schema(
  {
    repository: {
      type: String,
      required: true,
    },
    repoTopics: {
      type: String,
    },
    datestamp_creation: {
      type: Date,
    },
    archiveUrl_creation: {
      type: String,
    },
    topicExists_creation: {
      type: Boolean,
    },
    datestamp_release: {
      type: Date,
    },
    archiveUrl_release: {
      type: String,
    },
    topicExists_release: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const Organisation = mongoose.model("Organisation", organisationSchema);

export default Organisation;

// "data": {
//     "repository": "ajv-validator/ajv",
//     "repoTopics": "\"json-schema,validator,ajv\"",
//     "datestamp_creation": 1432077812000,
//     "archiveUrl_creation": "http://web.archive.org/web/20200515085719/https://github.com/ajv-validator/ajv",
//     "topicExists_creation": true,
//     "datestamp_release": 1434196865000,
//     "archiveUrl_release": "http://web.archive.org/web/20200515085719/https://github.com/ajv-validator/ajv",
//     "topicExists_release": true
//   }
