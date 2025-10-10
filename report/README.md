# Timetable Buddy - Project Report (Modular LaTeX Structure)

## Directory Structure

```
report/
├── main.tex                    # Main document file - compile this
├── frontmatter/                # Front matter sections
│   ├── titlepage.tex           # Title page
│   ├── certificate.tex         # Certificate page
│   ├── declaration.tex         # Student declaration
│   ├── acknowledgment.tex      # Acknowledgments
│   ├── abstract.tex            # Abstract
│   └── references.tex          # Bibliography
├── chapters/                   # Main report chapters
│   ├── chapter1_introduction.tex
│   ├── chapter2_requirements.tex
│   ├── chapter3_technology.tex
│   ├── chapter4_design.tex
│   ├── chapter5_implementation.tex
│   ├── chapter6_testing.tex
│   ├── chapter7_risk.tex
│   ├── chapter8_results.tex
│   ├── chapter9_challenges.tex
│   ├── chapter10_future.tex
│   ├── chapter11_conclusion.tex
│   └── sections/               # Chapter subsections (optional)
│       ├── requirements_functional.tex
│       └── requirements_nonfunctional.tex
└── appendices/                 # Appendices
    ├── testcases.tex           # Test case documentation
    ├── risks.tex               # Risk assessment
    ├── screenshots.tex         # System screenshots
    └── deployment.tex          # Installation guide

```

## How to Use

### Compilation

1. **Navigate to the report directory:**
   ```bash
   cd report/
   ```

2. **Compile the main document:**
   ```bash
   pdflatex main.tex
   pdflatex main.tex  # Run twice for TOC, references
   ```

3. **Output:**
   - PDF will be generated as `main.pdf`

### Editing Individual Sections

Each section is in its own file. To modify a specific part:

1. **Edit the appropriate file:**
   - Front matter: `frontmatter/[section].tex`
   - Chapters: `chapters/chapter[N]_[name].tex`
   - Appendices: `appendices/[name].tex`

2. **Save your changes**

3. **Recompile** `main.tex` to see changes in the PDF

### Benefits of This Structure

✅ **Modular**: Each chapter/section in separate files
✅ **Easy to Edit**: Modify one section without affecting others
✅ **Version Control**: Track changes per chapter
✅ **Collaboration**: Multiple team members can work on different chapters
✅ **Maintainable**: Easy to find and update specific content
✅ **Reusable**: Can use chapters in other documents

## File Descriptions

### Main Document
- **main.tex**: The master file that includes all other files. Compile this file only.

### Front Matter Files
- **titlepage.tex**: Project title, team members, supervisor, VIT logo, institution details
- **certificate.tex**: Official certification page with examiner signatures
- **declaration.tex**: Student declaration of originality
- **acknowledgment.tex**: Acknowledgments and thanks
- **abstract.tex**: Project abstract and keywords
- **references.tex**: Bibliography and citations

### Chapter Files
- **chapter1_introduction.tex**: Introduction, Objectives, Problem Statement
- **chapter2_requirements.tex**: Functional and Non-Functional Requirements
- **chapter3_technology.tex**: Technology Stack and Architecture
- **chapter4_design.tex**: System Design, Database, API, UI Design
- **chapter5_implementation.tex**: Development Methodology, Code Details
- **chapter6_testing.tex**: Test Strategy, Test Cases, Results
- **chapter7_risk.tex**: Risk Assessment and Management
- **chapter8_results.tex**: Features, Performance Metrics, Deliverables
- **chapter9_challenges.tex**: Technical and Management Challenges
- **chapter10_future.tex**: Future Enhancements and Improvements
- **chapter11_conclusion.tex**: Summary, Achievements, Learning Outcomes

### Appendix Files
- **testcases.tex**: 60 test cases documentation
- **risks.tex**: 5 risk assessments
- **screenshots.tex**: System screenshots and diagrams
- **deployment.tex**: Installation and deployment guide

## Customization

### Adding a New Chapter
1. Create new file: `chapters/chapterN_name.tex`
2. Add content to the file
3. Add `\input{chapters/chapterN_name}` to `main.tex` in appropriate position

### Adding Subsections
1. Create `chapters/sections/` directory if not exists
2. Create new file: `chapters/sections/subsection_name.tex`
3. Include in parent chapter using `\input{chapters/sections/subsection_name}`

### Modifying Existing Content
1. Open the specific `.tex` file you want to edit
2. Make your changes
3. Save the file
4. Recompile `main.tex`

## Important Notes

- **Always compile from the report/ directory**
- **Logo file**: Place `vit_logo.png` in the parent directory or adjust path in `titlepage.tex`
- **Two compilations**: Run pdflatex twice to generate proper TOC and references
- **Encoding**: All files use UTF-8 encoding
- **LaTeX Distribution**: Requires TeX Live, MiKTeX, or MacTeX

## Team Members
- Sarthak Kulkarni (23101B0019)
- Dhruv Tikhande (23101B0005)
- Atharv Petkar (23101B0010)
- Pulkit Saini (23101B0021)

## Supervisor
Prof. Dhanashree Tamhane

## Institution
Department of Information Technology
Vidyalankar Institute of Technology
University of Mumbai
(AY 2025-26)

## Quick Start

```bash
# Navigate to report directory
cd report/

# Compile the report
pdflatex main.tex
pdflatex main.tex

# View the PDF
# Open main.pdf with your PDF viewer
```

## Troubleshooting

### Missing Files Error
- Ensure all referenced files exist in their directories
- Check file paths in `\input{}` commands

### Logo Not Displaying
- Verify `vit_logo.png` is in the correct location
- Adjust path in `frontmatter/titlepage.tex` if needed

### Compilation Errors
- Check for LaTeX syntax errors in individual files
- Ensure all packages are installed
- Run `pdflatex` twice for proper references

## Migration from Single File

The original `PROJECT_REPORT.tex` has been split into modular components:
- All content preserved
- Same output when compiled
- Easier to maintain and modify
- Better for team collaboration

---

**Last Updated:** 2025-10-10
**Document Version:** 2.0 (Modular)
