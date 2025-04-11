// Function to generate preview pathname based on content type and document
const getPreviewPathname = (uid, { document }): string => {

  const slug = document?.artistInfo?.find(info => info.slug)?.slug;


  // Handle different content types with their specific URL patterns
  switch (uid) {
    // case "api::artist.artist": {
    //   return `/`; // Individual product page
    // }
    case "api::artist.artist": {
      if (!slug) {
        return "/"; 
      }
      return `/${slug}`; 
    }
    default: {
      return null;
    }
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ env }) => {
  const clientUrl = env("CLIENT_URL"); // Frontend application URL
  const previewSecret = env("PREVIEW_SECRET"); // Secret key for preview authentication
  
  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
    preview: {
      enabled: true, // Enable preview functionality
      config: {
        allowedOrigins: clientUrl, // Restrict preview access to specific domain
        async handler(uid, { documentId, status }) {
          // Fetch the complete document from Strapi
          //const document = await strapi.documents(uid).findOne({ documentId});
          const document = await strapi.documents(uid).findOne({
            documentId
          });
          
          // Generate the preview pathname based on content type and document
          const pathname = getPreviewPathname(uid, { document });

          // Disable preview if the pathname is not found
          if (!pathname) {
            return null;
          }

          // Use Next.js draft mode passing it a secret key and the content-type status
          const urlSearchParams = new URLSearchParams({
            url: pathname,
            secret: previewSecret,
            status,
          });

          return `${clientUrl}/api/preview?${urlSearchParams}`;
          
        },
      },
    },
  }
};


