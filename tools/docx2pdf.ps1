param([string]$Docx, [string]$Pdf)
$w = New-Object -ComObject Word.Application
$w.Visible = $false
$w.DisplayAlerts = 0
try {
  $d = $w.Documents.Open($Docx, $false, $true)
  $pages = $d.ComputeStatistics(2)
  $d.ExportAsFixedFormat($Pdf, 17)
  $d.Close(0)
  Write-Output "PAGES=$pages"
} finally {
  $w.Quit()
}
