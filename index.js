const core = require("@actions/core")
const github = require("@actions/github")
const SftpUpload = require("sftp-upload")

try {
    var options = {
      host: core.getInput("host"),
      username: core.getInput("user"),
      path: core.getInput("file-path"),
      remoteDir: core.getInput("destination-path"),
      privateKey: core.getInput("ssh-key"),
      passphrase: core.getInput("ssh-key-passphrase"),
      dryRun: false,
    }

    sftp = new SftpUpload(options)

    sftp
    .on("error", (err) => {
        core.setFailed(err.message)
    })
    .on("uploading", (progress) => {
        console.log("Uploading "+progress.file)
    })
    .on("completed", () => {
        console.log("Upload completed")
    })
    .upload()
} catch(err) {
    core.setFailed(err.message)
}