#!/bin/bash
# Runs prettier on files Claude just edited or wrote (PostToolUse hook for Edit|Write).

FILE_PATH=$(jq -r '.tool_input.file_path // empty')

if [ -z "$FILE_PATH" ] || [ ! -f "$FILE_PATH" ]; then
  exit 0
fi

case "$FILE_PATH" in
  *.ts|*.html|*.css|*.scss|*.json|*.md)
    ;;
  *)
    exit 0
    ;;
esac

cd "$CLAUDE_PROJECT_DIR" || exit 0
npx --no-install prettier --write "$FILE_PATH" >/dev/null 2>&1

exit 0
