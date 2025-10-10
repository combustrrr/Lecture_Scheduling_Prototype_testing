# Timetable Buddy - Project Report

This directory contains the LaTeX source file for the comprehensive project report.

## Files

- `PROJECT_REPORT.tex` - Main LaTeX source file for the project report
- `vit_logo.png` - VIT logo image (needs to be placed in this directory)

## Compiling the Report

### Prerequisites

You need a LaTeX distribution installed on your system:

- **Windows:** [MiKTeX](https://miktex.org/) or [TeX Live](https://www.tug.org/texlive/)
- **macOS:** [MacTeX](https://www.tug.org/mactex/)
- **Linux:** Install TeX Live via your package manager
  ```bash
  sudo apt-get install texlive-full  # Ubuntu/Debian
  sudo yum install texlive-scheme-full  # Fedora/CentOS
  ```

### VIT Logo Setup

1. Download the VIT logo image from the GitHub link provided in the comment
2. Save it as `vit_logo.png` in the same directory as `PROJECT_REPORT.tex`
3. Alternatively, you can use any VIT logo image you have

The logo URL from the comment: https://github.com/user-attachments/assets/30d09723-24f3-4f7f-9e97-a7314e0da6a7

### Compilation Steps

#### Method 1: Using Command Line

```bash
# Navigate to the project directory
cd /path/to/Lecture_Scheduling_Prototype_testing

# Compile the LaTeX document (run twice for proper references)
pdflatex PROJECT_REPORT.tex
pdflatex PROJECT_REPORT.tex

# This will generate PROJECT_REPORT.pdf
```

#### Method 2: Using Online LaTeX Editor

1. Go to [Overleaf](https://www.overleaf.com/)
2. Create a new project
3. Upload `PROJECT_REPORT.tex`
4. Upload `vit_logo.png` 
5. Click "Recompile" to generate the PDF

#### Method 3: Using LaTeX IDE

Use any LaTeX IDE such as:
- TeXstudio
- TeXmaker
- Visual Studio Code with LaTeX Workshop extension

Simply open `PROJECT_REPORT.tex` and compile.

## Report Structure

The project report includes the following chapters:

1. **Title Page** - Project title, team members, supervisor, and institution details
2. **Certificate** - Official project certificate
3. **Declaration** - Student declaration
4. **Acknowledgment** - Acknowledgments and thanks
5. **Abstract** - Project summary and keywords
6. **Table of Contents** - Automatic table of contents
7. **Introduction** - Project overview, motivation, objectives, and scope
8. **Literature Survey** - Background study and existing systems analysis
9. **System Requirements** - Functional and non-functional requirements
10. **System Design** - Architecture, database design, API design, and UI design
11. **Implementation** - Development methodology and key implementation details
12. **Testing and Quality Assurance** - Test strategy, test cases, and results
13. **Risk Assessment** - Risk identification, categories, and mitigation strategies
14. **Results and Achievements** - System features, performance metrics, and deliverables
15. **Challenges and Solutions** - Technical and project management challenges
16. **Future Enhancements** - Planned features and improvements
17. **Conclusion** - Summary, achievements, and learning outcomes
18. **References** - Bibliography
19. **Appendices** - Test documentation, risk documentation, screenshots, and deployment guide

## Customization

### Updating Team Member Information

Edit the title page section in `PROJECT_REPORT.tex`:

```latex
\begin{tabular}{lr}
    Sarthak Kulkarni & 23101B0019 \\
    Dhruv Tikhande & 23101B0005 \\
    Atharv Petkar & 23101B0010 \\
    Pulkit Saini & 23101B0021 \\
\end{tabular}
```

### Updating Supervisor

Edit this line:

```latex
{\large\bfseries Prof. Dhanashree Tamhane\par}
```

### Adding Screenshots

Replace the placeholder comments in Appendix C with actual screenshots:

```latex
\includegraphics[width=\textwidth]{screenshot_dashboard.png}
```

## Project Details

- **Project Name:** Timetable Buddy
- **Institution:** Vidyalankar Institute of Technology
- **Department:** Information Technology
- **University:** University of Mumbai
- **Academic Year:** 2025-26
- **Degree:** Bachelor of Technology in Information Technology

## Team Members

1. Sarthak Kulkarni (23101B0019)
2. Dhruv Tikhande (23101B0005)
3. Atharv Petkar (23101B0010)
4. Pulkit Saini (23101B0021)

## Supervisor

Prof. Dhanashree Tamhane

## Additional Notes

- The report is comprehensive with ~50 pages of content
- All sections are properly formatted and structured
- References are included in standard bibliography format
- Appendices include test case and risk assessment documentation
- Installation and deployment guides are provided

## Troubleshooting

### Missing Packages Error

If you get errors about missing packages, install them:

```bash
# For Ubuntu/Debian
sudo apt-get install texlive-latex-extra texlive-fonts-extra

# Or use tlmgr (TeX Live Manager)
tlmgr install <package-name>
```

### Logo Not Displaying

Ensure that:
1. The logo file `vit_logo.png` is in the same directory as the .tex file
2. The filename matches exactly (case-sensitive on Linux/macOS)
3. The image format is supported (PNG, JPG, PDF)

### Compilation Takes Long

First compilation may take longer. Subsequent compilations will be faster.

## License

This project report is part of the academic submission for Vidyalankar Institute of Technology.

## Contact

For questions or issues with the report, please contact the team members through the university email system.
