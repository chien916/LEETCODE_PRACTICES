git add --all
git commit --all -m "$(Get-Date -format 'u')"
echo "$(Get-Date -format 'u')"
git push