export interface Experience {
  company: string
  role: string
  period: string
  type: string
  points: string[]
  stack: string[]
}

// Content below comes from your resume. Update freely.
export const experience: Experience[] = [
  {
    company: '3M',
    role: 'Data Engineer',
    period: 'Apr 2025 — Present',
    type: 'Full-time',
    points: [
      'Reduced an Apache Iceberg pipeline SLA from 90+ minutes to roughly 20 minutes using merge-on-read and S3-based processing optimizations.',
      'Build production ELT pipelines with Informatica IICS/IDMC, SQL, Snowflake and AWS across 6+ enterprise source systems, covering full, incremental and CDC loads.',
      'Engineer AWS Glue / Spark pipelines for heterogeneous sources feeding downstream Snowflake analytics.',
      'Implemented parameter-driven processing and hard/soft-delete logic to keep source and Snowflake in sync.',
      'Integrated REST APIs and nested JSON using LATERAL FLATTEN, and automated SFTP delivery and Taskflow orchestration across 50+ Snowflake views.',
    ],
    stack: ['Informatica IICS', 'Snowflake', 'AWS Glue', 'Iceberg', 'SQL'],
  },
  {
    company: 'Amazon',
    role: 'Data Engineering Intern',
    period: 'Jul 2023 — Aug 2023',
    type: 'Internship',
    points: [
      'Developed ETL workflows in PySpark and SQL for large-scale processing, including table creation, schema changes and transformations.',
      'Used Amazon S3 and Redshift for ingestion, storage and analytics, working with engineers to troubleshoot data-quality issues.',
    ],
    stack: ['PySpark', 'SQL', 'S3', 'Redshift'],
  },
]
