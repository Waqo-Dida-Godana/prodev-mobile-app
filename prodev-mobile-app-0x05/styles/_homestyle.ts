import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchGroup: {
    backgroundColor: "#34967C",
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    color: "white",
    fontSize: 16,
  },
  searchControl: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  searchButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  filterGroup: {
    paddingHorizontal: 20,
  },
  filterContainer: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  listingContainer: {
    flex: 1,
    padding: 20,
  },
  paginationContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    padding: 15,
    borderRadius: 10,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export { styles };
