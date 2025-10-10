# VIT Logo Setup Instructions

## Logo Image Required

The PROJECT_REPORT.tex file requires the VIT (Vidyalankar Institute of Technology) logo to be placed in this directory.

## Steps to Add Logo

1. **Download the Logo:**
   - The logo is available at: https://github.com/user-attachments/assets/30d09723-24f3-4f7f-9e97-a7314e0da6a7
   - Or use any official VIT logo you have

2. **Save the Logo:**
   - Save the logo image as `vit_logo.png` in this directory
   - Ensure the filename is exactly `vit_logo.png` (case-sensitive)

3. **Verify:**
   - The file should be in the same directory as PROJECT_REPORT.tex
   - Supported formats: PNG, JPG, or PDF

## Alternative Methods

### If you don't have the logo yet:

1. **Comment out the logo line** in PROJECT_REPORT.tex temporarily:
   ```latex
   % \includegraphics[width=0.5\textwidth]{vit_logo.png}
   ```

2. **Use a placeholder:** Create a simple text placeholder
   ```latex
   \textbf{[VIT LOGO]}
   ```

3. **Add it later:** Compile the document without the logo and add it in the final version

## Logo Specifications

- **Recommended size:** 500x200 pixels or similar aspect ratio
- **Format:** PNG (preferred), JPG, or PDF
- **Location in document:** Title page, centered
- **Display width:** 50% of page width

## If Logo Doesn't Display

Check these common issues:
1. Filename matches exactly (including case)
2. File is in the correct directory
3. Image file is not corrupted
4. LaTeX has permission to read the file

## Logo Image Preview

The VIT logo typically shows:
- "VIT" text in blue
- "Vidyalankar Institute of Technology" 
- "Accredited A+ by NAAC" in red

The logo from the GitHub URL shows these elements in the standard VIT branding format.
