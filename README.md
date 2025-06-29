![FOSDEM_Pre-seeds](https://github.com/user-attachments/assets/ad760ab1-a01b-4aeb-b891-8c2bfc6abc60)

# Pre-seeds Research Training Program

Welcome! This repository houses a vision of making the research landscape more equitable and diverse - a “**Research 101” course**, undergoing development. This project aims to provide accessible and flexible research training for diverse audiences, including aspiring researchers, citizen scientists, professionals, and more.

## Project Overview

The Pre-seeds (Research 101) program is in the early stages of development, and is evolving as it grows.

It started as a beginner course designed to equip **aspiring researchers** with the foundational knowledge, skills and tools to embark on their journey. Gradually, it has morphed from the initial concept of a [cohort-based](cohort-based.md) training program to a [modular](modular-course.md) course structure. This approach allows for greater flexibility and inclusivity, catering to different learning needs and backgrounds.

### Key Features

1. **Modular structure**: The course is divided into standalone modules, each covering a specific aspect of research. This allows learners to choose modules that best fit their needs and interests.
   
2. **Diverse use cases**:
   - **Cohort-based training**: Aimed at aspiring researchers or individuals early in their research careers. The course can be delivered in a structure similar to [Open Seeds](http://we-are-ols.org/openseeds) or [Nebula](http://we-are-ols.org/nebula).
   - **Research Software Engineers (RSEs)**: Providing foundational knowledge of research for new hires, especially RSEs who do not come from academic or research backgrounds, with the aim of acclimatising them to the new work environment.
   - **Citizen Science**: Empowering individuals who have little to no previous knowledge of research to engage in scientific research.
   - **Professional development**: Enhancing research skills for various professional fields.
   - **Other use cases**: Open to additional applications as the program evolves.

## Roadmap
See our [roadmap](roadmap.md) for more details.

## How You Can Contribute
We believe in the power of collaboration and invite you to join us in shaping this program. To find out how you can get involved, read our [CONTRIBUTING.md](CONTRIBUTING.md) file.

## Contributors

- Deborah Udoh - [@npdebs](https://github.com/NPDebs).
- Tosan Okome - [@tosan-okome](https://github.com/tosan-okome).
- Joy Udoh - [@Udoh-Joy](https://github.com/Udoh-Joy).
- Peace Udoh - [@Peace01-sudo](https://github.com/Peace01-sudo).
- Bhogal Jyoti

## Contact

For questions, suggestions, or to express interest in collaboration, please reach out via [deborahudoh02@gmail.com](mailto:"deborahudoh02@gmail.com").


----------------------------------------

# The Carpentries Workbench Template Markdown Lesson

This lesson is a template lesson that uses [The Carpentries Workbench][workbench]. 

## Note about lesson life cycle stage
Although the `config.yaml` states the life cycle stage as pre-alpha, **the template is stable and ready to use**. The life cycle stage is preset to `"pre-alpha"` as this setting is appropriate for new lessons initialised using the template.

## Create a new repository from this template

To use this template to start a new lesson repository, 
make sure you're logged into Github.   
Visit https://github.com/carpentries/workbench-template-md/generate
and follow the instructions.
Checking the 'Include all branches' option will save some time waiting for the first website build
when your new repository is initialised.

If you have any questions, contact [@tobyhodges](https://github.com/tobyhodges)

## Configure a new lesson

Follow the steps below to
complete the initial configuration of a new lesson repository built from this template:

1. **Make sure GitHub Pages is activated:**
   navigate to _Settings_,
   select _Pages_ from the left sidebar,
   and make sure that `gh-pages` is selected as the branch to build from.
   If no `gh-pages` branch is available, check _Actions_ to see if the first
   website build workflows are still running.
   The branch should become available when those have completed.
1. **Adjust the `config.yaml` file:**
   this file contains global parameters for your lesson site.
   Individual fields within the file are documented with comments (beginning with `#`)
   At minimum, you should adjust all the fields marked 'FIXME':
   - `title`
   - `created`
   - `keywords`
   - `life_cycle` (the default, _pre-alpha_, is the appropriate for brand new lessons)
   - `contact`
1. **Annotate the repository** with site URL and topic tags:
   navigate back to the repository landing page and
   click on the gear wheel/cog icon (similar to ⚙️) 
   at the top-right of the _About_ box.
   Check the "Use your GitHub Pages website" option,
   and [add some keywords and other annotations to describe your lesson](https://cdh.carpentries.org/the-carpentries-incubator.html#topic-tags)
   in the _Topics_ field.
   At minimum, these should include:
   - `lesson`
   - the life cycle of the lesson (e.g. `pre-alpha`)
   - the human language the lesson is written in (e.g. `deutsch`)
1. **Adjust the 
   `CITATION.cff`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, and `LICENSE.md` files**
   as appropriate for your project.
   -  `CITATION.cff`:
      this file contains information that people can use to cite your lesson,
      for example if they publish their own work based on it.
      You should [update the CFF][cff-sandpaper-docs] now to include information about your lesson,
      and remember to return to it periodically, keeping it updated as your
      author list grows and other details become available or need to change.
      The [Citation File Format home page][cff-home] gives more information about the format,
      and the [`cffinit` webtool][cffinit] can be used to create new and update existing CFF files.
   -  `CODE_OF_CONDUCT.md`: 
      if you are using this template for a project outside The Carpentries,
      you should adjust this file to describe 
      who should be contacted with Code of Conduct reports,
      and how those reports will be handled.
   -  `CONTRIBUTING.md`:
      depending on the current state and maturity of your project,
      the contents of the template Contributing Guide may not be appropriate.
      You should adjust the file to help guide contributors on how best
      to get involved and make an impact on your lesson.
   -  `LICENSE.md`:
      in line with the terms of the CC-BY license,
      you should ensure that the copyright information 
      provided in the license file is accurate for your project.
1. **Update this README with 
   [relevant information about your lesson](https://carpentries.github.io/lesson-development-training/collaborating-newcomers.html#readme)**
   and delete this section.

[cff-home]: https://citation-file-format.github.io/
[cff-sandpaper-docs]:  https://carpentries.github.io/sandpaper-docs/editing.html#making-your-lesson-citable
[cffinit]: https://citation-file-format.github.io/cff-initializer-javascript/
[workbench]: https://carpentries.github.io/sandpaper-docs/
