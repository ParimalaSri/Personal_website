export interface SkillGroup {
  title: string
  blurb: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Data Engineering',
    blurb: 'Pipelines that are reliable, incremental and observable.',
    items: ['ETL / ELT', 'CDC & incremental loads', 'Data quality', 'Medallion architecture', 'Dimensional modeling', 'SCD Type 1/2'],
  },
  {
    title: 'Data Integration',
    blurb: 'Connecting heterogeneous enterprise sources.',
    items: ['Informatica IICS / IDMC', 'Taskflows', 'Mass ingestion', 'REST APIs', 'SFTP', 'JSON processing'],
  },
  {
    title: 'Databases',
    blurb: 'Warehousing and query performance.',
    items: ['Snowflake', 'SQL', 'SQL Server', 'DuckDB', 'Redshift'],
  },
  {
    title: 'Cloud & Storage',
    blurb: 'Lake and compute on AWS.',
    items: ['AWS S3', 'AWS Glue', 'IAM', 'Apache Iceberg', 'Parquet'],
  },
  {
    title: 'Programming',
    blurb: 'Tools for automation and processing.',
    items: ['Python', 'PySpark', 'SQL', 'Shell scripting', 'C++', 'Git'],
  },
  {
    title: 'AI & Analytics',
    blurb: 'Areas of interest and active exploration.',
    items: ['LLM applications', 'Entity resolution', 'FastAPI', 'Streamlit'],
  },
]
