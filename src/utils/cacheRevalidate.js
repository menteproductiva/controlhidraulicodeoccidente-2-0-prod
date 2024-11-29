
export const getFetchOptions = () => {
    return {
      next: {
        revalidate: 1,
      },
    };
  };
  