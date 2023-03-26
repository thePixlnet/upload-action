# Upload action

This action uploads a folder content to an sftp server.

## Inputs

### `host`

**Required** The address of the target server.

### `user`

**Required** The user which the action should use.

### `ssh-key`

**Required** The private ssh key used to upload the files.

### `ssh-key-passphrase`

**Required** The passphrase of the key.

### `ssh-port`

**Required** The ssh port to use.

### `destination-folder`

**Required** The folder, which to upload.

### `file-path`

**Required** The path from the file, which will be uploaded.

## Example usage

```yaml
uses: thePixlnet/upload-actions@v1.0
with:
  host: 127.0.0.1
  user: github
  ssh-key: ${{ secrets.SSH_KEY }}
  destination-path: ~/folder/
  file-path: /target/plugin-1.0.0.jar
```