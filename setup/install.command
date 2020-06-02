/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
brew install node
brew cask install chromedriver
kill `ps -A | grep -w Terminal.app | grep -v grep | awk '{print $1}'`