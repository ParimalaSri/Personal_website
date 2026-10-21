// Edit this file to update the personal details shown across the site.
// Leave a link as '' and it is hidden from the page (no dead buttons).
export const profile = {
  name: 'Parimala Sri Sikhakolli',
  role: 'Data Engineer at 3M',
  headline: 'Building with data. Exploring beyond it.',
  subtitle: 'Data Engineer · Problem Solver · AI Explorer',
  email: 'sikhakolliparimalasri@gmail.com',
  github: 'https://github.com/ParimalaSri',
  linkedin: 'https://www.linkedin.com/in/parimala-sri-sikhakolli-95103823b/',
  photo: './profile.jpg',
  // Optional: paste https://formsubmit.co/ajax/<your-email> to send messages straight to your inbox
  // from the form. Leave empty and the form opens the visitor's email app instead.
  formEndpoint: '',
  resumeUrl: '', // TODO: drop resume.pdf in /public and set to './resume.pdf'
  about: [
    'I am a Data Engineer at 3M, where I build and maintain production ELT pipelines that move data from a range of enterprise systems into Snowflake, using Informatica IICS/IDMC, SQL, AWS and Spark. Much of my work is in the unglamorous parts that make data trustworthy: incremental and CDC loads, delete handling, orchestration and performance.',
    'Before that I interned as a Data Engineer at Amazon, working with PySpark, SQL, S3 and Redshift. I hold a B.Tech in Computer Science and Engineering.',
    'Lately I have been exploring where data engineering meets AI: LLM-powered applications, entity resolution, and tools that turn raw data into decisions.',
  ],
  highlights: [
    { label: 'Currently', value: 'Data Engineer, 3M' },
    { label: 'Previously', value: 'Data Engineering Intern, Amazon' },
    { label: 'Education', value: 'B.Tech, Computer Science' },
    { label: 'Exploring', value: 'AI engineering & LLM apps' },
  ],
}
