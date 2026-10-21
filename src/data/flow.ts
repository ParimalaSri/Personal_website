export interface FlowNode {
  id: string
  label: string
  x: number
  y: number
  big?: boolean
  title: string
  items: string[]
}

// Content for the hero data-flow diagram. Everything here comes from the resume;
// add or remove items freely. Keep it high-level (no confidential details).
export const flowNodes: FlowNode[] = [
  {
    id: 'sources',
    label: 'sources',
    x: 40,
    y: 70,
    title: 'Source systems',
    items: ['AS400', 'SAP (S2C modules, GTS → E4H migration support)', 'SAP HANA', 'SQL Server', 'Snowflake views'],
  },
  {
    id: 'apis',
    label: 'APIs',
    x: 40,
    y: 170,
    title: 'APIs',
    items: ['REST APIs', 'Nested JSON payloads (LATERAL FLATTEN in Snowflake)'],
  },
  {
    id: 'files',
    label: 'files',
    x: 40,
    y: 270,
    title: 'Files',
    items: ['SFTP file delivery', 'JSON', 'Parquet on S3', 'Standardized file outputs from 50+ Snowflake views'],
  },
  {
    id: 'ingest',
    label: 'ingest',
    x: 190,
    y: 170,
    big: true,
    title: 'Ingestion',
    items: ['Informatica IICS / IDMC mappings & taskflows', 'Mass ingestion', 'AWS Glue / Spark', 'Full, incremental and CDC loads'],
  },
  {
    id: 'transform',
    label: 'transform',
    x: 340,
    y: 110,
    title: 'Transformation',
    items: ['SQL', 'PySpark', 'Parameter-driven processing', 'Apache Iceberg (merge-on-read)'],
  },
  {
    id: 'validate',
    label: 'validate',
    x: 340,
    y: 230,
    title: 'Reliability',
    items: ['Data quality checks', 'Hard / soft-delete handling', 'Taskflow orchestration'],
  },
  {
    id: 'warehouse',
    label: 'warehouse',
    x: 490,
    y: 170,
    big: true,
    title: 'Destinations',
    items: ['Snowflake', 'AWS S3 + Apache Iceberg', 'Amazon Redshift (internship)'],
  },
]
