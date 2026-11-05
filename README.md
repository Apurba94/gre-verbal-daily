# Verbal Daily Ten

Ten mixed verbal questions a day, with a streak, so vocabulary and reading stay fresh.

Part of the [GRE and TOEFL Study Suite](https://github.com/Apurba94/gre-toefl-study-suite): 100 free study apps for the GRE General Test and more. It works offline, as a Windows program or in the browser.

## Download and run

- **Windows:** download `Verbal Daily Ten.exe` from the [latest release](https://github.com/Apurba94/gre-verbal-daily/releases/latest) and open it. Nothing to install. It opens in its own window and saves your progress in your user folder.
- **Browser:** open it online in the suite's web edition at https://gre-toefl-study-suite.vercel.app/apps/gre-verbal-daily/ . Progress stays in that browser.
- **From source:** `python launcher.py` (Python 3.10 or later, no packages needed).

## What it does

A small daily habit beats a weekly cram. Each day this app gives the same ten verbal questions, four text completions, three sentence equivalence and three reading, so you can come back to finish them. Your streak counts the days in a row you have done your ten.

Sections: Today, Progress, About.

## How to use it

1. Open the app once a day and press **Start today's ten**.
2. Finish all ten to keep your streak.
3. Review the explanations at the end.

## Good to know

- All questions, passages and definitions were written for this suite. None are official ETS questions. For official practice, use the materials on ets.org.
- It follows the GRE General Test as shortened in September 2023 and the TOEFL iBT as updated in January 2026. Formats change, so check ets.org before your test.
- Feedback on writing and speaking counts things a program can count honestly, such as length and linking words. It does not give an official score.
- Not endorsed by or affiliated with ETS. GRE and TOEFL are registered trademarks of ETS.

## For developers

The app is plain HTML and JavaScript in `web/`, run by a small Python launcher that serves it on 127.0.0.1 only and needs a secret token for saving. Tests: `node --test "tests/*.test.js"` (23 tests) and `python -m unittest discover -s tests`. Build the .exe with `python build_exe.py`.

Built with AI assistance (Claude Code). MIT licence. By JANIN A APURBA.
