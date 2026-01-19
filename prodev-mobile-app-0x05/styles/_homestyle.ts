import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    backgroundColor: "#34967C",
    padding: 20,
    paddingTop: 60,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#000",
  },
  searchControl: {
    borderWidth: 0,
    padding: 0,
  },
  searchButton: {
    backgroundColor: "#34967C",
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  filterContainer: {
    alignItems: "center",
    marginRight: 20,
    width: 60,
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
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export { styles };
