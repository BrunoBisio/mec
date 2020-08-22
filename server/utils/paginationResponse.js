exports.generateResponse = function(result, pagination) {
    return {
        pagination: {
            total: result.count,
            offset: pagination.offset,
            limit: pagination.limit
        },
        results: result.rows
    }
}