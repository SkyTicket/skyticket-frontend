const Date = () => {
    return (
      <div className="flex gap-1 overflow-x-auto pb-4 scrollbar-hide">
        {dates.map((item, index) => (
          <React.Fragment key={index}>
            <DateItem {...item} />
            {index < dates.length - 1 && <DateSeparator />}
          </React.Fragment>
        ))}
      </div>
    );
  };
  
  export default Date;