import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import Prism from 'prismjs'

const IndexPage = (): JSX.Element => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <Navbar />
      <main className='px-6 md:px-12 mb-32 max-w-screen-2xl mx-auto'>
        <div className='mx-6 my-64 text-center'>
          <h1 className='md-display-large'>NPI Healthcare Data</h1>
          <p className='md-headline-medium md-color-secondary mt-6'>
            Monthly Archives of Healthcare Providers and NPI numbers
          </p>
        </div>

        <div className='mt-48 max-w-screen-lg mx-auto'>
          <h2 className='text-center md-display-large'>Archives</h2>
          <p className='mt-8'>
            Download and decompress the latest SQLite formatted archive of NPI
            Provider data from CMS. Archives are compressed using{' '}
            <OutboundLink
              href='http://facebook.github.io/zstd/'
              className='md-link underline hover:md-on-primary-container'
            >
              <code>zstd</code>
            </OutboundLink>
            .
          </p>
          <div className='mt-8'>
            <pre
              className='py-4 px-8 rounded-2xl overflow-auto w-full'
              style={{ background: 'var(--md-light-surface1)' }}
            >
              <code className='language-bash'>
                curl --proto &apos;=https&apos; -sSf
                https://healthcare-data.adambcomer.com/npi/npi_data_may_2023.sqlite.zst
                | zstd -d - -o npi_data_may_2023.sqlite
              </code>
            </pre>
          </div>

          <h3 className='md-headline-medium mt-16'>Archives List</h3>

          <ul className='mt-8 mx-4'>
            <li className='text-lg list-disc'>
              <OutboundLink
                href='https://healthcare-data.adambcomer.com/npi/npi_data_may_2023.sqlite.zst'
                className='md-link hover:md-on-primary-container'
              >
                May 2023 SQLite Database (npi_data_may_2023.sqlite.zst) [695.42
                MB]
              </OutboundLink>
            </li>
            <li className='text-lg list-disc'>
              <OutboundLink
                href='https://healthcare-data.adambcomer.com/npi/npi_data_april_2023.sqlite.zst'
                className='md-link hover:md-on-primary-container'
              >
                April 2023 SQLite Database (npi_data_april_2023.sqlite.zst)
                [758.87 MB]
              </OutboundLink>
            </li>
          </ul>

          <h3 className='md-headline-medium mt-16'>Documentation</h3>

          <p className='mt-8'>
            The Centers for Medicare & Medicaid Services (CMS) publishes a
            monthly archive of all recognized providers and their associated NPI
            number. This data is invaluable because it enables downstream
            services to consistency reference healthcare providers.
          </p>

          <p className='mt-4'>
            While publicly available, the data is cumbersome and challenging to
            process on resource constrained computers. The primary use case of a
            NPI dataset is to lookup provider information base on their NPI
            number. But, since the data lives in a ~10GB CSV file, this makes
            searching next to impossible.
          </p>

          <p className='mt-4'>
            To make searches and point queries possible on modest hardware, I
            formatted the data into SQLite tables. SQLite tables give us the
            benefits of fast indexes, table joins, and stable datatypes.
          </p>

          <h4 className='md-headline-small mt-8'>Table Schemas</h4>
          <pre
            className='mt-8 py-4 px-8 rounded-2xl overflow-auto w-full'
            style={{ background: 'var(--md-light-surface1)' }}
          >
            <code className='language-sql'>
              {`TABLE providers (
    npi INTEGER PRIMARY KEY,
    entity_type_code INTEGER,
    replacement_npi INTEGER,
    ein TEXT,
    provider_organization_name TEXT,
    provider_last_name TEXT,
    provider_first_name TEXT,
    provider_middle_name TEXT,
    provider_name_prefix_text TEXT,
    provider_name_suffix_text TEXT,
    provider_credential_text TEXT,
    provider_other_organization_name TEXT,
    provider_other_organization_name_type_code TEXT,
    provider_other_last_name TEXT,
    provider_other_first_name TEXT,
    provider_other_middle_name TEXT,
    provider_other_name_prefix_text TEXT,
    provider_other_name_suffix_text TEXT,
    provider_other_credential_text TEXT,
    provider_other_last_name_type_code INTEGER,
    provider_first_line_business_mailing_address TEXT,
    provider_second_line_business_mailing_address TEXT,
    provider_business_mailing_address_city_name TEXT,
    provider_business_mailing_address_state_name TEXT,
    provider_business_mailing_address_postal_code TEXT,
    provider_business_mailing_address_country_code TEXT,
    provider_business_mailing_address_telephone_number TEXT,
    provider_business_mailing_address_fax_number TEXT,
    provider_first_line_business_practice_location_address TEXT,
    provider_second_line_business_practice_location_address TEXT,
    provider_business_practice_location_address_city_name TEXT,
    provider_business_practice_location_address_state_name TEXT,
    provider_business_practice_location_address_postal_code TEXT,
    provider_business_practice_location_address_country_code TEXT,
    provider_business_practice_location_address_telephone_number TEXT,
    provider_business_practice_location_address_fax_number TEXT,
    provider_enumeration_date TEXT,
    last_update_date TEXT,
    npi_deactivation_reason_code TEXT,
    npi_deactivation_date TEXT,
    npi_reactivation_date TEXT,
    provider_gender_code TEXT,
    authorized_official_last_name TEXT,
    authorized_official_first_name TEXT,
    authorized_official_middle_name TEXT,
    authorized_official_title_or_position TEXT,
    authorized_official_telephone_number TEXT,
    is_sole_proprietor TEXT,
    is_organization_subpart TEXT,
    parent_organization_lbn TEXT,
    parent_organization_tin TEXT,
    authorized_official_name_prefix_text TEXT,
    authorized_official_name_suffix_text TEXT,
    authorized_official_credential_text TEXT,
    certification_date TEXT
);

TABLE provider_licences (
    npi INTEGER,
    provider_license_number TEXT,
    provider_license_number_state_code TEXT
);

TABLE provider_taxonomies (
    npi INTEGER,
    healthcare_provider_taxonomy_code TEXT,
    healthcare_provider_taxonomy_group TEXT,
    healthcare_provider_primary_taxonomy_switch TEXT
);

TABLE other_provider_identifiers (
    npi INTEGER,
    other_provider_identifier TEXT,
    other_provider_identifier_type_code INTEGER,
    other_provider_identifier_state TEXT,
    other_provider_identifier_issuer TEXT
);
`}
            </code>
          </pre>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <>
      <link
        rel='canonical'
        href='https://adambcomer.com/healthcare-data/npi/'
      />

      <title>NPI Healthcare Data</title>
      <meta
        name='description'
        content='Monthly SQLite Archives of Healthcare Providers and NPI numbers'
      />

      <meta property='og:title' content='NPI Healthcare Data' />
      <meta
        property='og:description'
        content='Monthly SQLite Archives of Healthcare Providers and NPI numbers'
      />
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content='https://adambcomer.com/healthcare-data/npi/'
      />
    </>
  )
}
