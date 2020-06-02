#!/bin/sh
osascript <<END
tell application "Terminal"
    do script "/bin/bash -c '$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)'"
end
tell application "Terminal"
    do script "brew install chromedriver"
end
tell application "Terminal"
    do script "brew install node"
end
END
