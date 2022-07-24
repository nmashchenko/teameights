import * as React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import ArrowLeft from '../../../../assets/Arrows/ArrowLeft'
import ArrowRight from '../../../../assets/Arrows/ArrowRight'

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function Pagination() {
  const { items } = usePagination({
    count: 10
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = <h4 style={{margin: '0 15px 0 0', color: 'white'}}>...</h4>
          } else if (type === "page") {
            children = (
              <button
                type="button"
                style={{
                  background: selected ? "#5D9D0B" : "transparent",
                  borderRadius: "3px",
                  border: "none",
                  width: "20px",
                  height: "20px",
                  marginRight: "15px",
                  justifyContent: "center",
                  color: 'white',
                  fontSize: '14px',
                  fontFamily: "Montserrat",
                  cursor: "pointer",
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children =
              index === 0 ? (
                <button
                  type="button"
                  style={{
                    border: "none",
                    background: "none",
                    marginRight: "15px"
                  }}
                  {...item}
                >
                  <ArrowLeft />
                </button>
              ) : (
                <button
                  type="button"
                  style={{
                    border: "none",
                    background: "none"
                  }}
                  {...item}
                >
                  <ArrowRight />
                </button>
              );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}
