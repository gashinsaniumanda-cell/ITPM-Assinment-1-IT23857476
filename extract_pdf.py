from PyPDF2 import PdfReader

pdf_path = r'c:\Users\ASUS\Desktop\ITPM Assinment 1\Assignment 1-ITPM.pdf'
reader = PdfReader(pdf_path)

# Extract text from all pages
for i, page in enumerate(reader.pages):
    print(f"\n{'='*80}\nPAGE {i+1}\n{'='*80}\n")
    text = page.extract_text()
    print(text)
