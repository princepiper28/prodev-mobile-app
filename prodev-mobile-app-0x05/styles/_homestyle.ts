import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  searchGroup: {
    backgroundColor: "white",
    padding: 16,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: "#333",
  },
  searchControl: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  searchButton: {
    backgroundColor: "#34967C",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 12,
  },
  filterContainer: {
    alignItems: "center",
    marginHorizontal: 8,
  },
  listingContainer: {
    flex: 1,
    padding: 16,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  showMoreButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#34967C",
    borderRadius: 20,
  },
  showMoreButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export { styles };
