git add --all
git commit --all -m "$(Get-Date -format 'u')"
echo "当前日期: $(Get-Date -format 'u')"
git push